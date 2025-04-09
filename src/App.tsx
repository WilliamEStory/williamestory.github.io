import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import MyAvatar from "@/assets/avatar-will.jpg"
import { ThemeProvider } from "./providers/theme-provider"

function App() {

  return (
    <ThemeProvider defaultTheme="dark">
      <div className="place-items-center mt-20 gap-2 flex flex-col">
        <img src={MyAvatar} alt="My Avatar" className="rounded-full w-32 h-32 object-cover" />
        <h1 className="text-4xl font-bold">William Story</h1>
        <h2 className="text-3xl font-bold">Software Engineer</h2>
      </div>
    </ThemeProvider>
  )
}

export default App
