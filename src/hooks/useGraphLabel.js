import { useEffect } from 'react';

//FIXME: Find a better way to fix graph labels


//this hook pushes every graph x-Axis label by 20px
const useGraphLabel = () => {
    
    useEffect(() => {
        const interval = setInterval(() => {
            const labelroot = document.querySelector(".MuiChartsAxis-root");
            if (labelroot) {
                clearInterval(interval)
                const tspanArr = labelroot.querySelectorAll("tspan");
                if (tspanArr && tspanArr.length > 0) {
                    for (let i = 0; i < tspanArr.length; i++) {
                        if (i % 2 === 0) {
                            tspanArr[i].setAttribute("dy", 20)
                        }
                    }
                }
            }
        }, 200);

        return () => clearInterval(interval)
    }, [])

    return null
}

export default useGraphLabel