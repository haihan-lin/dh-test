import _ from 'lodash';
import { default as DH } from '@visdesignlab/data-hunches';

function component () {
  const element = document.createElement('div');
  // // Lodash, now imported by this script
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  const randomdata = [{ label: "a", value: 9 }, { label: "b", value: 2 }, { label: "c", value: 2 }, { label: "d", value: 3 }, { label: "e", value: 5 }, { label: "f", value: 7 }, { label: "g", value: 9 }, { label: "h", value: 5 }];

  let chart = DH.createBarChart(randomdata, 500, 500, "haihan");
  console.log(DH.getRecordsOnBar());
  return chart.node();
}

document.body.appendChild(component());