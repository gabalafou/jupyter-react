import { selectCell, CellLumino } from '../../../index';
import CellControl from '../../controls/CellControl';

/*
const SOURCE_1 = `import ipywidgets as widgets
widgets.IntSlider(
    value=7,
    min=0,
    max=10,
    step=1,
)`
*/
const SOURCE_2 = `from IPython.display import display
for i in range(3):
    display('😃 String {} added to the DOM in separated DIV.'.format(i))

import numpy as np
import matplotlib.pyplot as plt
x1 = np.linspace(0.0, 5.0)
x2 = np.linspace(0.0, 2.0)
y1 = np.cos(2 * np.pi * x1) * np.exp(-x1)
y2 = np.cos(2 * np.pi * x2)
fig, (ax1, ax2) = plt.subplots(2, 1)
fig.suptitle('A tale of 2 subplots')
ax1.plot(x1, y1, 'o-')
ax1.set_ylabel('Damped oscillation')
ax2.plot(x2, y2, '.-')
ax2.set_xlabel('time (s)')
ax2.set_ylabel('Undamped')
plt.show()`;

const CellPreview = () => {
  const cell = selectCell();
  return <>
    <div>source: {cell.source}</div>
    <br/>
    <div>kernel available: {String(cell.kernelAvailable)}</div>
    <br/>
  </>
}

const CellExample = () =>  <>
  <CellPreview/>
  <CellControl />
  <CellLumino source={SOURCE_2} />
</>

export default CellExample;
