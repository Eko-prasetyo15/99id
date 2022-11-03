import React, { useState } from 'react'
import { Istore } from './type'
import BuildingIcon from '../Asset/building.png'

interface IList {
    data: Istore;
}
const Card: React.FC<IList> = ({ data }) => {

    const [show, setShow] = useState(false)

    const onClickShow = () => {
        setShow(!show)
    }

    let text = data.description;
    let result = text.replace("5678", "xxxx");

    return (

        <div className="card" style={{ width: "544px" }}>
            <img src={data?.pic} className="card-image" alt="..." />
            <div className="card-body">
                <div className="col-12">
                    <div className="bungkus">
                        <div className="ribon">Launcing Soon</div>
                    </div>
                    <div className="row">
                        <div className="col-md-8">
                            <div className="dflex mb-2">
                                <div style={{ margin: '2px' }}>
                                    <img className="" src={BuildingIcon} width="40" height="40" alt="..."/>
                                </div>
                                <div className="address">
                                    <span className="title">{data?.title}</span>
                                    <span className="title-address">{data?.address}</span>
                                </div>

                            </div>
                            <div className="row mb-2">
                                <span className="availibity">
                                    {data?.project_type} {data?.year} {data.ownership_type}
                                </span>
                                <span className="availibity">
                                    {data?.availabilities_label}
                                </span>
                            </div>
                        </div>
                        <div className="col-md-4 mb-2">
                            <div className="row address">
                                <span className="psf">{data?.psf_min} - {data?.psf_min} psf</span>
                                <span className="title-address">{data?.subprice_label}</span>
                            </div>
                        </div>
                        <span className="desc-btn" onClick={onClickShow}>{show ? 'minimize' : 'see description'}</span>
                    </div>
                    { show && (
                        <div className="availibity">
                            {result}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Card