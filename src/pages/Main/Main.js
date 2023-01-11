import './Main.scss';
export default function Main() {
    return (
        <>
            <div className='main-tit-background'>
                <div className='main-tit'>
                    <div className='main-store'>
                        <p className='main-store-top'>우리동네 스타벅스</p>
                        <p className='main-store-bottom'>부산 부산진구 가야대로 462-1</p>
                    </div>
                    <div className='main-percent'>
                        <a className='main-percent-top'>
                            <a className='percent-front-num'>24</a>
                            <a className='percent-slash'> / </a>
                            <a className='percent-back-num'>34</a>
                        </a>
                        <a className='main-percent-bottom'>(84%)</a>
                    </div>
                </div>
            </div>
        </>
    )
}