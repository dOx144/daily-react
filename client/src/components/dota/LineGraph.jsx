import { Bar } from "react-chartjs-2";
import {Chart as ChartJS} from 'chart.js/auto';    

const LineGraph = ({data}) => {
  return <Bar data={data} />
}
 
export default LineGraph;