/**
 * Renders a component for displaying exercise 1.7 from the stress management exercise book
 */
export default function Exercise1_7() {
    return (
        <>
        <div className="divider divider-primary mx-auto w-4/5">Æfing: Grunnþarfir</div>
        <p className="text-lg my-1 font-serif">Á skalanum 0 (lítið sem ekkert) upp í 10 (mjög vel) telur þú þig sinna þínum grunnþörfum:</p>
        <p className="text-2xl font-medium mt-6">Líkamlegar:</p>
        <label htmlFor="range1" className="text-lg my-1 font-serif">Jafnvægi á mataræði:</label>
        <input type="range" min="0" max="10" defaultValue="0" className="slider" id="range1" />
        <br />
        <label htmlFor="range2" className="text-lg my-1 font-serif">Hæfilegur svefn:</label>
        <input type="range" min="0" max="10" defaultValue="0" className="slider" id="range2" />

        <p className="text-2xl font-medium mt-6">Öryggi:</p>
        <label htmlFor="range1" className="text-lg my-1 font-serif">Fjárhagslegt öryggi:</label>
        <input type="range" min="0" max="10" defaultValue="0" className="slider" id="range1" />
        <br />
        <label htmlFor="range2" className="text-lg my-1 font-serif">Hlúa að heilsunni:</label>
        <input type="range" min="0" max="10" defaultValue="0" className="slider" id="range2" />
        
        <p className="text-2xl font-medium mt-6">Félagsskapur og umhyggja:</p>
        <label htmlFor="range1" className="text-lg my-1 font-serif">Félagsleg samskipti:</label>
        <input type="range" min="0" max="10" defaultValue="0" className="slider" id="range1" />
        <br />

        </>
    )
}
