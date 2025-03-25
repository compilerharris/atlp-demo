"use client"
import { useRouter } from "next/navigation";

export default function ThankYou() {
    const router = useRouter();

    const redirectToHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        router.push("https://antservices.in");
    }
    return (
        <section className="thankyou">
            <div className="container">
                <div className="txtDiv">
                    <h2 className="heading-02 text-line-section">Thank you for your request.</h2>
                    <p style={{marginBottom: '20px'}}>Our sales team will get back to you soon.</p>
                    <a onClick={(e: React.MouseEvent<HTMLAnchorElement>) => redirectToHome(e)} className="btn">GO TO HOME</a>
                </div>
            </div>
            <style>
                {`
                    body{
                        color: #fff;
                    }
                    .thankyou{ 
                        background: linear-gradient(132deg, #FF1A0D 0%, #a31e17 100%);
                        background-size: cover;
                        padding: 0;
                        background-position: center;
                    }
                    .thankImg{ 
                        position: absolute;
                        bottom: 0;
                        right: 0;
                        left: 0;
                        max-width: 700px;
                        margin: 0 auto;
                    }
                    .heading-02{
                        color: #fff;
                    }
                    p{
                        color: #fff;
                        font-size: 30px;
                    }
                    .thankyou .container{ 
                        position: relative;
                        height: 100vh;
                        max-width: 100vw;
                    }
                    .txtDiv{	
                        padding: 50px 20px;
                        position: absolute;
                        left: 0;
                        right: 0;
                        margin: 0 auto;
                        text-align: center;
                        top: 50%;
                        transform: translateY(-50%); max-width: 900px; 
                    }
                    @media only screen and (max-width: 768px){
                        p{
                            font-size: 20px;
                        }
                    //     .thankyou{
                    //         background-image: url('images/highlights/big-img-mobile.jpg');
                    //     }
                    }
                `}
            </style>
        </section>
    );
}