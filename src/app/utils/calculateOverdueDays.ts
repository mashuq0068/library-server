const calculateOverdueDays = (borrowDate: Date): number => {
    const today = new Date();
    const overdueDays = Math.floor((today.getTime() - borrowDate.getTime()) / (1000 * 60 * 60 * 24)) - 14; 
    return overdueDays > 0 ? overdueDays : 0; 
  };

  export default calculateOverdueDays