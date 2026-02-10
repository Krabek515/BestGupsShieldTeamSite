import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"
import AboutTeam from "./components/AboutTeam/AboutTeam.jsx"
import TeamComposition from "./components/TeamComposition/TeamComposition.jsx"
import SendMessage from "./components/SendMessage/SendMessage.jsx"
import './App.css'

export default function App() {
    return (
        <>
            <main>
                <Header />
                <AboutTeam />
                <TeamComposition />
            </main>
            <SendMessage />
            <Footer />
        </>
    )
}
