'use client'
import Link from "next/link"
import { useState } from "react"
import svgIcon from "../../../public/assets/images/maps/full.svg"
import Image from "next/image"
export default function Pricing() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>            
            <section className="service-section">
                <Image
                    src={svgIcon}
                    alt="World Map"
                    style={{ width: '100%', height: '100%' }}
                />
            </section>
        </>
    )
}
