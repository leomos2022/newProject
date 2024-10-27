import '../stylesheets/Biography.css';

export function Biography() {
// export default function Biography() {
    return (
        <div className='biographyContainer'>
            <img 
                className='biographyImage' 
                src='https://i.imgur.com/PlxS7eP.jpeg' 
                alt='Imagén de Isaac Newton'
            />
            <div className='biographyText'>
                <p className='biographyName'>Isaac Newton</p>    
                <p className='biographyCountry'>Inglaterra</p>    
                <p className='biographyDescription'>Físico, matemático y astrónomo inglés, conocido por su ley de gravitación universal y sus tres leyes del movimiento.</p>    
            </div>    
        </div>
    );
}