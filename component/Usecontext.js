import React from 'react'
import { useCustomizeContext } from './Createcontext';
const Usecontext = () => {
    const { declareState: {

        exhiStartComplete,
        setExhiStartComplete,

    }, } = useCustomizeContext();
    return (
        <div className='container mt-5'>
            <br />
            <h1>
                {exhiStartComplete}
            </h1>
            <button className='btn btn-warning'
                onClick={() => setExhiStartComplete("Aju")}>Change State</button> <br />
                <br />
            <button className='btn btn-primary'
                onClick={() => setExhiStartComplete("Bala")}>Re-Change State</button>
        </div>
    )
}

export default Usecontext
