import './SendMessage.css'

export default function SendMessage() {
    return (
        <div className='upFormBlock'>
            <div className="formBlock">
                <div className='formText'>
                    <h2>Связаться с нами</h2>
                    <p>Вы можете отправить сообщение напрямую одному из нас!</p>
                    <p className="subText">Оставить пожелание, гневный комментарий или что-то еще — всегда приветствуется.</p>
                </div>
                <form action="#" className='messageForm' onSubmit={(e) => e.preventDefault()}>
                    <div className="inputGroup">
                        <label>Ваше имя</label>
                        <input type="text" placeholder='Введите свое имя' />
                    </div>

                    <div className="inputGroup">
                        <label htmlFor="userName">Кому пишем?</label>
                        <select name="targetUser" id="userName">
                            <option value="CanIWinU">CanIWinU</option>
                            <option value="GhostJeck">GhostJeck</option>
                            <option value="Brotankerat">Brotankerat</option>
                            <option value="GEROINCHIK">GEROINCHIK</option>
                            <option value="Pivo_chan">Pivo_chan</option>
                            <option value="ivetvv">ivetvv</option>
                        </select>
                    </div>

                    <div className="inputGroup">
                        <label>Сообщение</label>
                        <textarea className='textToMember' placeholder="Напишите что-нибудь приятное..."></textarea>
                    </div>

                    <button type="submit" className="sendBtn">Отправить</button>
                </form>
            </div>
        </div>
    )
}