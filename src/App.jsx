import MemberFrame from "./components/MemberFrame"
import Moments from "./components/Moments.jsx"
import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"
import { Members } from "./data.jsx"
import { YETIMoments } from "./data.jsx"
import './App.css'

function App() {

    return (
        <>
            <Header />
            <div className="characteristic">
                <div className="description">
                    <p className="entry">YETI - монументальный сланцевый бастион, ставший неприступным оплотом жизни среди вечных льдов.</p>
                    <p>В бескрайних заснеженных пустошах возвышается государство Yeti — колоссальный бастион из черного сланца и реликтового льда. Это чудо архитектурной мысли превратило некогда разрозненные хижины в единую, неподвластную времени цитадель. Здесь каждый камень служит общей цели, а суровый климат лишь закаляет волю его жителей. За стенами, способными выдержать натиск любой армии и самой яростной метели, процветает порядок, где величие монументальных построек встречается с теплом домашнего очага. Yeti — это не просто крепость, это символ триумфа воли над первобытным холодом.</p>
                </div>
                <div className="carousel"><Moments {...YETIMoments} /></div>
            </div>
            <div className="teamBlock">
                <div className="ourTeam">Наша команда:</div>
                <div className="members">
                    <MemberFrame {...(Members[0])} />
                    <MemberFrame {...(Members[1])} />
                    <MemberFrame {...(Members[2])} />
                    <MemberFrame {...(Members[3])} />
                    <MemberFrame {...(Members[4])} />
                    <MemberFrame {...(Members[5])} />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default App
