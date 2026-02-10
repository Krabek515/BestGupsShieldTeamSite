import { Members } from "../../data"
import MemberFrame from "../MemberFrame"
import './TeamComposition.css'

export default function TeamComposition() {
    return (
        <section className="teamBlock">
            <div className="members">
                <div className="ourTeam">Наша команда:</div>
                {Members.map((member, index) => (
                    <MemberFrame key={index} {...member} />
                ))}
            </div>
        </section>
    )
}