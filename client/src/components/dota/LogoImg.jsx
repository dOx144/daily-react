const LogoImg = ({src, msg}) => {
  return ( 
    <img className="size-4" src={src} title={msg} alt={msg} />
   );
}
 
export default LogoImg;