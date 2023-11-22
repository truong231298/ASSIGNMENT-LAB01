

import ListView from './components/ListView'
import AddForm from './components/AddForm'

function App() {
  return (
    <div>
      <h1>Item Management System</h1>
      <div>
        <div>
          <h2>Add Car</h2>
          <AddForm/>
        </div>
        <div>
          <h2>View Cars</h2>
          <ListView/>
        </div>
      </div>
    </div>
  )
}
export default App
