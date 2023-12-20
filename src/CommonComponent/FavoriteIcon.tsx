import React from 'react';
import PropTypes from 'prop-types';

import SelectStar from '../componenets/Icons/sources/selectedstar.svg';
import Star from '../componenets/Icons/sources/star.svg';

interface FavoriteIconsProps {
  size?: 'large' | 'medium' | 'small';
  color?: string;
  tooltip?: string;
  isContour?: boolean;
  onClick?: () => void;
}

const ICON_SIZES_CLASSES = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small'
};

const FavoriteIcons: React.FC<FavoriteIconsProps> = (props) => {
  const { size, color, tooltip, onClick } = props;
  const styleSizeClass = size || ICON_SIZES_CLASSES.MEDIUM;
  const colorStyle = color ? { color: color } : { color: '#4c5865' };
  const title = tooltip || "labels.Common.iconsDefTooltips.favourite";
  const iconType = color === "#ffcc00" ? 1 : 2;

  return (
    <>
      <i style={colorStyle} title={title} onClick={onClick}>
        {iconType === 1 && <img src={Star} style={{ width: 20, height: 20 }} alt="Star" />}
        {iconType === 2 && <img src={SelectStar} style={{ width: 20, height: 20 }} alt="Selected Star" />}
      </i>
    </>
  );
};

FavoriteIcons.propTypes = {
//   size: PropTypes.oneOf([ICON_SIZES_CLASSES.LARGE, ICON_SIZES_CLASSES.MEDIUM, ICON_SIZES_CLASSES.SMALL]),
  isContour: PropTypes.bool,
  color: PropTypes.string,
  tooltip: PropTypes.string,
  onClick: PropTypes.func
};

export default FavoriteIcons;
