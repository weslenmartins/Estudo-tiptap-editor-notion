import { useEditor, EditorContent, BubbleMenu, FloatingMenu } from '@tiptap/react'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import StarterKit from '@tiptap/starter-kit'
import css from 'highlight.js/lib/languages/css'
import js from 'highlight.js/lib/languages/javascript'
import html from 'highlight.js/lib/languages/xml'
import { lowlight } from 'lowlight'
import { BubbleButton } from './BubbleButtons'
import { FloatingButton } from './FloatingButton'

import { RxFontBold, RxFontItalic, RxStrikethrough, RxCode, RxChevronDown, RxChatBubble } from 'react-icons/rx'
import { InitialContent } from './InitialContent'
import 'highlight.js/styles/atom-one-dark.css'

lowlight.registerLanguage('html', html)
lowlight.registerLanguage('css', css)
lowlight.registerLanguage('js', js)

const Editor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        codeBlock: false,
      }),
      CodeBlockLowlight.configure({ lowlight }),
    ],
    content: InitialContent,
    editorProps: {
      attributes: {
        class: 'outline-none prose prose-invert prose-emerald mx-auto max-w-[700px] pt-16',
      },
    },
  })

  return (
    <>
      <EditorContent editor={editor} />
      {editor && (
        <FloatingMenu
          editor={editor}
          shouldShow={({ state }) => {
            const { $from } = state.selection
            const currentLineText = $from.nodeBefore?.textContent
            return currentLineText === '/'
          }}
          className="flex flex-col gap-1 overflow-hidden rounded-lg border border-zinc-600 bg-zinc-700 px-1 py-2 shadow-xl shadow-black/20"
        >
          <FloatingButton
            title="Texts"
            subTitle="Just start writing with plain text."
            icon="https://www.notion.so/images/blocks/text/en-US.png"
            onClick={() => {
              editor.chain().focus().setParagraph().run()
            }}
          />
          <FloatingButton
            title="Heading 1"
            subTitle="Big section heading."
            icon="https://www.notion.so/images/blocks/header.57a7576a.png"
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          />
          <FloatingButton
            title="Heading 2"
            subTitle="Big section heading."
            icon="https://www.notion.so/images/blocks/subheader.9aab4769.png"
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          />
          <FloatingButton
            title="Heading 3"
            subTitle="Big section heading."
            icon="https://www.notion.so/images/blocks/subsubheader.d0ed0bb3.png"
            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          />
          <FloatingButton
            title="List"
            subTitle="Create a simple bulleted list."
            icon="https://www.notion.so/images/blocks/bulleted-list.0e87e917.png"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
          />
        </FloatingMenu>
      )}
      {editor && (
        <BubbleMenu
          className="flex divide-x divide-zinc-600 overflow-hidden rounded-lg border border-zinc-600 bg-zinc-700 shadow-xl shadow-black/20"
          editor={editor}
        >
          <BubbleButton>
            Text
            <RxChevronDown className="h-4 w-4" />
          </BubbleButton>
          <BubbleButton>
            <RxChatBubble className="h-4 w-4" />
            Comment
          </BubbleButton>
          <div className="flex items-center">
            <BubbleButton
              onClick={() => editor.chain().focus().toggleBold().run()}
              data-active={editor.isActive('bold')}
            >
              <RxFontBold className="h-4 w-4" />
            </BubbleButton>
            <BubbleButton
              onClick={() => editor.chain().focus().toggleItalic().run()}
              data-active={editor.isActive('italic')}
            >
              <RxFontItalic className="h-4 w-4" />
            </BubbleButton>
            <BubbleButton
              onClick={() => editor.chain().focus().toggleStrike().run()}
              data-active={editor.isActive('strike')}
            >
              <RxStrikethrough className="h-4 w-4" />
            </BubbleButton>
            <BubbleButton
              onClick={() => editor.chain().focus().toggleCode().run()}
              data-active={editor.isActive('code')}
            >
              <RxCode className="h-4 w-4" />
            </BubbleButton>
          </div>
        </BubbleMenu>
      )}

      <footer className="mt-10 text-right">
        <button
          type="button"
          className="rounded bg-cyan-600 px-3 py-2 text-sm font-bold text-zinc-100 transition-colors hover:bg-cyan-700"
          onClick={() => {
            const html = editor?.getJSON()
            console.log(html)
          }}
          title="Retorno no console.log"
        >
          SAVE POST
        </button>
      </footer>
    </>
  )
}

export default Editor
