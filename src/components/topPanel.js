import Image from "next/image";
import profilePic from "../../public/logo_cor.png";
import axios from "axios";


import Router from 'next/router'

export default function TopPanel(props) {

   function revalidate() {
        // axios.get(`${window.location.pathname}/api/revalidate?secret=${process.env.REVALIDATE_TOKEN}`)
        //     .then(() => {
        //         Router.reload(window.location.pathname)
        //     });
    }
    return (
        <div className="d-flex align-items-center p-3 my-3 text-white bg-prefecture rounded shadow-sm">
            <div className="lh-1 me-3 col-4">
                <Image
                    src={profilePic}
                    alt="Logo"
                    width='213'
                    height='38'
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                />

            </div>
            <div className="lh-1 me-3 col-4 text-center hidden-xs hidden-sm" id="header_data_hora">
                <p id="header_data">00/00/0000</p>
                <h1 id="header_hora">00:00</h1>
            </div>

            <div className="lh-1 col-4 text-center">

                <a href="#" className="lh-1 mb-0 h6 mt-1 text-white btn" onClick={revalidate()}>Atualizar</a><br/>
                <a href="#" className="lh-1 mb-0 h6 mt-1 text-white btn">Acessar Painel</a>

            </div>
        </div>
    )
}
