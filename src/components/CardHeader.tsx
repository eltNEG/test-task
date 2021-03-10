const CardHeader = ({children, className}: ICartHeaderProps) => {
    return (
      <div className={`flex flex-wrap items-center h-16 ${className}`}>
        {children}
      </div>
    )
  }
export default CardHeader
