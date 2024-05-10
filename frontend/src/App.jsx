import { RouterProvider } from "react-router-dom"
import AppRoute from "./routes/AppRoute"
import { AuthProvider } from "./contexts/AuthContext"

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={AppRoute}/>
    </AuthProvider>
  )
}

export default App