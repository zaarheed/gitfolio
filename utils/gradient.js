const gradients = [
    "bg-gradient-to-br from-amber-200 to-red-400",
    "bg-gradient-to-br from-blue-200 to-red-300",
    "bg-gradient-to-br from-pink-300 to-rose-300",
    "bg-gradient-to-br from-purple-300 to-zinc-300",
    "bg-gradient-to-br from-cyan-300 to-neutral-300",
    "bg-gradient-to-br from-purple-300 to-lime-300",
    "bg-gradient-to-br from-purple-300 to-yellow-300",
    "bg-gradient-to-br from-violet-300 to-stone-300",
    "bg-gradient-to-br from-sky-300 to-pink-300",
    "bg-gradient-to-br from-amber-300 to-sky-300",
    "bg-gradient-to-br from-blue-300 to-stone-300",
    "bg-gradient-to-br from-cyan-300 to-blue-300",
    "bg-gradient-to-br from-stone-300 to-green-300",
    "bg-gradient-to-br from-slate-300 to-yellow-300",
    "bg-gradient-to-br from-stone-300 to-pink-300",
    "bg-gradient-to-br from-slate-300 to-amber-300"

]

export default function gradient() {
    const gradient = gradients[Math.floor(Math.random() * gradients.length)];
    return gradient;
}