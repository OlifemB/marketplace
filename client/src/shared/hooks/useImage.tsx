import React from 'react';
import paths from '@/shared/paths'

interface useImageProps {
    src: any,
    width?: number | string
    quality?: number | string
}

const useImage = ({src, width, quality}: useImageProps) => {
    return  paths.server.static + '/' + src
};

export default useImage;