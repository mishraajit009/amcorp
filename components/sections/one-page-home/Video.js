import VideoPopup from "@/components/elements/VideoPopup"
export default function About() {
    return (
        <>            
            
            <section className="video-section centred" id="video">
                <div className="bg-layer parallax-bg" data-parallax='{"y": 100}' style={{ backgroundImage: 'url(assets/images/background/video-bg.jpg)' }}></div>
                <div className="auto-container">
                    <div className="inner-box">
                    <h2>The 3rd Generation Private Commercial Bank</h2>
                    <div className="video-btn">
                        <VideoPopup />
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}
