import React, { useState } from 'react';
import PropTypes from 'prop-types';

// import { ICON_SIZES_CLASSES } from '../../Enums/CommonEnums';

import styles from './FavoriteIcon';
import  TenantSvg  from '../componenets/Icons/sources/tenat.svg';
// import { labels } from '../../labels';


const ICON_SIZES_CLASSES = {
    LARGE: 'large',
    MEDIUM: 'medium',
    SMALL: 'small'
};

//this components renders Favorite(Star) icon 
const FavoriteIcons = (props :any) => {
    const { size, color, tooltip, isContour } = props;
    const styleSizeClass = (typeof(size) != 'undefined' ? size : ICON_SIZES_CLASSES.MEDIUM);
    const colorStyle = (typeof(color) != 'undefined' && color != null && color.hasOwnProperty('length') && color.length > 0) ? 
        {color: color} : {color: '#4c5865'};
    const title = (typeof(tooltip) != 'undefined' && tooltip.length > 0) ? tooltip : "labels.Common.iconsDefTooltips.favourite";
    const iconType = (typeof(isContour) != 'undefined' && isContour === false) ? 1 : 2;//1 -> painted, 2 -> contour

    return (
        <i className={" fa-stack"}
           style={colorStyle}
           title={title}
           onClick={() => (props.hasOwnProperty('onClick') && typeof(props.onClick) != 'undefined' ? props.onClick() : null)}>
            {iconType == 1 &&
                // <i className={ " fas fa-star"}></i>
                <img src={TenantSvg} style={{ width: 20, height: 20 }} />
            }
            {iconType == 2 &&
                <i className={ " far fa-star"}></i>
            }
        </i>
    );
};




FavoriteIcons.propTypes = {
    /** an optional parameter that determines size of icon, by default icon will be of medium size */
    size: PropTypes.oneOf([ICON_SIZES_CLASSES.LARGE, ICON_SIZES_CLASSES.MEDIUM, ICON_SIZES_CLASSES.SMALL]),
    /** an optional parameter that determines wich type of icon to render: false -> painted or true -> contour. By default: displayed contour variant */
    isContour: PropTypes.bool,
    /** an optional parameter, that defines the color of icon */  
    color: PropTypes.string,
    /** an optional parameter, that determines custom tooltip, if not send - default tooltip is used */
    tooltip: PropTypes.string,
    /** an optional function to handle click on icon */
    onClick: PropTypes.func
};


export default FavoriteIcons;