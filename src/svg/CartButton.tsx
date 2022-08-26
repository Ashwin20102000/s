interface closeProps {
  count?:number
}
import classes from './svg.module.css'

const CartButton = (props:closeProps) => {
  return (
    <div style={{
      display:'flex',
      flexDirection:props.count?"row-reverse":"row"
    }}>
    {props?.count &&   
    <span className={classes.cartButton}><div className={classes.count}>
      {props.count}
      </div>
      </span>}
 <svg 
         width={40} xmlns="http://www.w3.org/2000/svg"
         data-name="Layer 1" viewBox="0 0 512 512">
          <g data-name="&lt;Group&gt;">
            <path fill="#00efd1"  d="M462.1,121.9,424.8,240.4a50.028,50.028,0,0,1-47.7,35H141.6l-.5.1L115,122l.4-.1Z"/><path fill="#00acea" d="M393.1 402.1a40.8 40.8 0 1 1-40.8 40.8A40.843 40.843 0 0 1 393.1 402.1zM179.2 402.1a40.8 40.8 0 1 1-40.8 40.8A40.779 40.779 0 0 1 179.2 402.1zM423.9 357.8H195.7a59.918 59.918 0 0 1-59.2-50L96.4 71.6A39.929 39.929 0 0 0 57 38.3H39.9a10 10 0 0 1 0-20H57a59.737 59.737 0 0 1 59.1 50l40.1 236.3a39.929 39.929 0 0 0 39.4 33.3H423.8a10.029 10.029 0 0 1 10 10A9.859 9.859 0 0 1 423.9 357.8z"/></g></svg>
    
           </div>
    )
}

export default CartButton