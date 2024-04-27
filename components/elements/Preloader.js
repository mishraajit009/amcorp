export default function Preloader() {
    return (
        <>
            <div className="loader-wrap">
            <div className="preloader">
                <div className="preloader-close">close</div>
                <div id="handle-preloader" className="handle-preloader">
                    <div className="animation-preloader">
                        <div className="spinner"></div>
                        <div className="txt-loading">
                            <span data-text-preloader="a" className="letters-loading">
                                A
                            </span>
                            <span data-text-preloader="&" className="letters-loading">
                                & 
                            </span>
                            <span data-text-preloader="m" className="letters-loading">
                                M
                            </span>
                            <span data-text-preloader="c" className="letters-loading">
                                C
                            </span>
                            <span data-text-preloader="o" className="letters-loading">
                                O
                            </span>
                            <span data-text-preloader="r" className="letters-loading">
                                R
                            </span>
                            <span data-text-preloader="p" className="letters-loading">
                                P
                            </span>
                        </div>
                    </div>  
                </div>
            </div>
        </div>


        </>
    )
}
