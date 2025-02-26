export const loadImages = () => {
    const images = import.meta.glob('../../../assets/marcos/*.png', { eager: true });
    const imageMap: { [key: string]: string } = {};
    for (const path in images) {
        const imageName = path.split('/').pop()?.replace('.png', '') || '';
        imageMap[imageName] = (images[path] as { default: string }).default;
    }
    return imageMap;
};