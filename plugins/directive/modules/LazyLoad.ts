/**
 * v-LazyLoad
 * client: true
 * server: false
 * 例子
 * <ClientOnly>
 *      <img v-LazyLoad="xxx.jpg" />
 * </ClientOnly>
 * 图片懒加载
 */
import type { Directive, DirectiveBinding } from "vue";

let options: {
    root: HTMLElement | null
    threshold: number
} | null

const callback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            if (img.src !== img.dataset.src) {
                img.src = img.dataset.src || ''
            }
        }
    })
}

let observer: IntersectionObserver | null = null

const observerHandler: (el: Element, binding: DirectiveBinding) => void = (
    el,
    binding
) => {
    if (el.tagName !== 'IMG') return
    const { value } = binding
    el.setAttribute('data-src', String(value))
    observer?.observe(el)
}

const LazyLoad: Directive = {
    mounted(el: HTMLElement, binding: DirectiveBinding) {
        if (options === null) {
            options = {
                root: document.querySelector('html'),
                threshold: 0.1
            }
        }

        if (observer === null) {
            observer = new IntersectionObserver(callback, options)
        }

        observerHandler(el, binding)
    },
    updated(el: HTMLElement, binding: DirectiveBinding) {
        observerHandler(el, binding)
    },
    beforeUnmount(el: HTMLElement) {
        if (observer) {
            observer.unobserve(el)
        }
    }
};

export default LazyLoad;