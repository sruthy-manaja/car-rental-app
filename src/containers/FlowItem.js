import React from 'react'
import PropTypes from "prop-types";
import Check from "../assets/images/check.svg"

function FlowItem({flowNumber, isCompleted, title, isActive}) {
  return (
    <div>
         <li className={isActive ? 'active' : 'inActive'}>
                <div>
                    <div className="circle">
                        <h3>
                        {
                            isCompleted
                            ?
                            <img src={Check}></img>
                            :
                            flowNumber
                        }
                        </h3>
                    </div>
                    <h3>{title}</h3>
                </div>
            </li>
    </div>
  )
}
FlowItem.propTypes = {
    flowNumber: PropTypes.number.isRequired,
    isCompleted: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired
  }
export default FlowItem