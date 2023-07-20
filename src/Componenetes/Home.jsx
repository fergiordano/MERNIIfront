import {InputGroup, Form } from 'react-bootstrap';
import '../css/home.css'

const Home = () => {
    return (
        <div>

            <div className='bienvenidos'>
                <h1 className='text-center text-white'>AyF Limpieza</h1>
            </div>

            <div className='container'>
                <p className='m-5'>
                    <img src="https://i.pinimg.com/564x/75/f2/8f/75f28f25b8960a4c894c9fb2a751293b.jpg" alt="" />
                    <h1>Sobre nosotros</h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, blanditiis. Nobis in at molestiae animi debitis sit excepturi, sunt laborum id voluptatem, voluptates fugit perferendis eum eaque, natus dolor eveniet.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto eaque dolore sequi nulla animi libero debitis. Cum adipisci dolores, perspiciatis asperiores laboriosam, saepe provident at quibusdam nulla ad voluptates sapiente!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime veritatis ut est saepe libero voluptatum debitis mollitia blanditiis ratione, dignissimos recusandae architecto, deleniti excepturi? Nihil itaque cupiditate aperiam. Doloremque, beatae!
                </p>
            </div>

            <div className='container'>
                <h1 className='text-center cnt'>CONTACTENOS</h1>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Nombre"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Apellido"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup> 
                <InputGroup className="input1">
                    <Form.Control
                        placeholder="E-mail"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <InputGroup className='input2'>
                    <Form.Control placeholder="Mensaje"
                    aria-label="Recipient's username" as="textarea"  />
                </InputGroup>

            </div>



        </div>
    )
}

export default Home;
