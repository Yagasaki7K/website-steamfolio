import { ImgHTMLAttributes, useEffect, useRef, useState } from "react";

interface SafeImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    fallbackText?: string;
}

export function SafeImage({
    src,
    alt,
    className,
    fallbackText,
    loading = "lazy",
    decoding = "async",
    ...rest
}: SafeImageProps) {
    const imageRef = useRef<HTMLImageElement | null>(null);
    const [shouldLoad, setShouldLoad] = useState(false);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const currentImage = imageRef.current;

        if (!currentImage) {
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setShouldLoad(true);
                        observer.disconnect();
                    }
                });
            },
            { rootMargin: "200px" },
        );

        observer.observe(currentImage);

        return () => observer.disconnect();
    }, []);

    if (hasError) {
        return (
            <span className={`image-fallback ${className || ""}`.trim()} aria-label={alt || fallbackText || "Image unavailable"} role="img">
                {fallbackText || "Image unavailable"}
            </span>
        );
    }

    return (
        <img
            ref={imageRef}
            src={shouldLoad ? src : undefined}
            alt={alt}
            className={className}
            loading={loading}
            decoding={decoding}
            onError={() => setHasError(true)}
            {...rest}
        />
    );
}
