import { useState } from "react";

export default function MemberFrame(props) {
    const [isHovered, setIsHovered] = useState(false);

    const styles = {
        frame: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            backgroundImage: `url(${props.frame})`,
            backgroundSize: '100% 100%',
            width: '300px',
            height: '420px',
            position: 'relative',
        },
        overlay: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            transition: 'opacity 1.0s ease',
            opacity: isHovered ? 1 : 0,
            zIndex: 1,
        },
        skin: {
            paddingTop: '10px',
            maxWidth: '60%',
            transition: 'opacity 1.0s ease',
            opacity: isHovered ? '0' : '1',
            visibility: isHovered ? 'hidden' : 'visible',
            zIndex: '2',
            position: 'relative',
        },
        text: {
            color: 'white',
            maxWidth: '95%',
            fontWeight: 'bold',
            marginTop: 'auto',
            marginBottom: '15px',
            opacity: isHovered ? '0' : '1',
            visibility: isHovered ? 'hidden' : 'visible',
            zIndex: '2',
            position: 'relative',
        },
        nickname: {
            fontSize: '24px',
            lineHeight: '1.5',
        },
        description: {
            fontSize: '18px',
            color: '#AFAFAF',
        },
        history: {
            color: 'white',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '90%',
            fontStyle: 'italic',
            height: '90%',
            fontSize: '20px',
            fontWeight: 'bold',
            zIndex: '3',
            transition: 'opacity 1.0s ease',
            opacity: isHovered ? '1' : '0',
            visibility: isHovered ? 'visible' : 'hidden',
        }
    }

    return (
        <>
            <div style={styles.frame} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <div style={styles.overlay}></div>
                <img src={props.skin} alt="CanIWinU" style={styles.skin} />
                <div style={styles.text}>
                    <div style={styles.nickname}>{props.nickname}</div>
                    <div style={styles.description}>{props.description}</div>
                </div>
                <div style={styles.history}>{props.history}</div>
            </div>
        </>
    )
}