import { useEffect, useState } from 'react'

const useTSharts = () => {
    const [tsharts, setTsharts] = useState([])
    useEffect(() => {
        fetch('tshirts.json')
            .then((res) => res.json())
            .then((data) => setTsharts(data))
    }, [])
    return [tsharts, setTsharts]
}

export default useTSharts
