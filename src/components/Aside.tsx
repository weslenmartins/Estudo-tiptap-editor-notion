export function AsideMenu() {
  return (
    <aside className="boder-r border-r-zinc-300 bg-zinc-900 p-4">
      <div className="group flex gap-2">
        <button className="h-3 w-3 rounded-full bg-zinc-300 group-hover:bg-red-400" />
        <button className="h-3 w-3 rounded-full bg-zinc-300 group-hover:bg-yellow-400" />
        <button className="h-3 w-3 rounded-full bg-zinc-300 group-hover:bg-green-400" />
      </div>

      <ul className="mt-5 flex flex-col gap-1">
        <li>
          <a href="https://tiptap.dev" className="block rounded px-2 py-2 text-sm font-bold hover:bg-zinc-800">
            Titap Editor
          </a>
        </li>
        <li>
          <a href="https://yjs.dev/" className="block rounded px-2 py-2 text-sm font-bold hover:bg-zinc-800">
            Y.js Shared Editing
          </a>
        </li>
      </ul>
    </aside>
  )
}
