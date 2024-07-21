function App(): JSX.Element {
  const handleAddProject = (): void => {
    return
  }

  return (
    <div className="h-full">
      <input type="text" className="border border-gray-300 rounded-md" />
      <div>
        <div id="table-header-actions">
          <button className="text-blue-500" onClick={handleAddProject}>
            Add Project
          </button>
        </div>
        <table>
          <thead></thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  )
}

export default App
