import React, {useState, useCallback} from 'react';
import './App.css';
import ButtonWave from "./components/buttonsHoverEffects/Wave";
import LoginForm from "./components/LoginForm";
import Animation3d from "./components/Animation3d";
import Gallery from "./components/ Gallery";
import Butterfly from "./components/Butterfly";
import CardRotate from "./components/Cards/CardRotate";
import WaterButton from "./components/buttonsHoverEffects/Water";
import ButtonSquares from "./components/buttonsHoverEffects/Square";
import NavBar from "./components/Navbar";

const card =
    {
        title: 'Card Title',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
            ' Ab adipisci commodi consequuntur eaque harum ipsa minus quam ratione recusandae similique.',
        alt: 'img',
        src: (i) => `img${i}.jpg`
    };

function App() {
    const [open, setOpen] = useState(false);

    const closeModal = useCallback(() => {
        setOpen(false);
    }, []);

    const openModal = useCallback(() => {
        setOpen(true);
    }, []);

    return (
        <>
            <NavBar/>
            <div id='login_form' className="App">
                <ButtonWave onClick={openModal}>Login</ButtonWave>
                {open && <LoginForm open={open} closeModal={closeModal}/>}
            </div>
            <div id='buttons' className="App">
                <WaterButton>Water</WaterButton>
                <ButtonSquares>button</ButtonSquares>
            </div>
            <div id='3d_inputs'>
                <Animation3d/>
            </div>
            <div id='gallery'>
                <Gallery/>
            </div>
            <div id='cards' className='cardsContainer'>
                {
                    Array.from({length: 4}).map((_, i) => <CardRotate
                        key={i} {...card}
                        src={card.src(i + 1)}/>)
                }
            </div>
            <div id='butterfly'>
                <Butterfly/>
            </div>
        </>
    );
}

export default App;
