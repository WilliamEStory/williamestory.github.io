import MyAvatar from "@/assets/avatar-will.jpg"
import { ThemeProvider } from "./providers/theme-provider"
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid'
import BadgeText from "./components/badge-text"

function App() {

  return (
    <ThemeProvider defaultTheme="dark">
      <div className="place-self-center mt-20 gap-5 flex md:flex-row flex-col max-w-4xl p-5">
        <section className="place-items-center gap-2 flex flex-col flex-2/5">
          <img src={MyAvatar} alt="My Avatar" className="rounded-full w-32 h-32 object-cover" />
          <h1>William Story</h1>
          <h2>Software Engineer</h2>
          <div className="text-base">Contact Info</div>
          <div className="place-self-center md:place-self-start flex flex-col gap-2">
            <BadgeText Icon={EnvelopeIcon}>
              <a href="mailto:william.story.e@gmail.com">william.story.e@gmail.com</a>
            </BadgeText>
            <BadgeText Icon={PhoneIcon}>
              <a href="tel:+1-770-598-2572">+1 (770)-598-2572</a>
            </BadgeText>
            <a className="text-base" href="https://www.linkedin.com/in/william-story-38765592/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a className="text-base" href="https://github.com/WilliamEStory" target="_blank" rel="noopener noreferrer">
              Github
            </a>
          </div>
        </section>
        <section className="place-items-center gap-2 flex flex-3/5 flex-col">
          <h1>About Me</h1>
          <p className="text-base">I am a primarily front-end focused developer. I take an emphatic approach to creating UI/UX. Currently living in Denver, CO and enjoying the mountains 🏔️</p>
        </section>
      </div>
    </ThemeProvider>
  )
}

export default App
