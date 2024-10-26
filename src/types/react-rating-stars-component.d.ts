declare module 'react-rating-stars-component' {
    import React from 'react';

    interface RatingStarsProps {
        count?: number;
        value?: number;
        size?: number;
        color?: string;
        activeColor?: string;
    }

    const RatingStars: React.FC<RatingStarsProps>;
    export default RatingStars;
}
