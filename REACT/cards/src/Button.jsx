import styles from './Button.module.css'

function Button(){

    //inline css on the React Component
    const style ={
            backgroundColor:"pink",
            color:"white",
            padding:"10px",
            width:"400px",
            borderRadius:"5px"

    }
    return(
        <button className={styles.button}>Click here </button>
    );
}
export default Button