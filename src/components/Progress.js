import React from "react";
import "./Progress.css";

function Progress({ Percentage }) {
return (
<div className="progress-bar-container">
<div className="progress-bar" style={{ width: `${Percentage}` }}>
</div>
<div className="progress-bar-text">{Percentage}%</div>

</div>
);
} export default Progress;