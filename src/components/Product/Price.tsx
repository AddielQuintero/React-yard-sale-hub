export const Price = (props: any) => {
  return (
    <div className={props.className}>
      U$S <span className={props.classPrice}>{props.price}</span>
    </div>
  )
}
