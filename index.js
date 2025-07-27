let count= document.getElementById("scoreHome")
let counts=0
let countGuest= document.getElementById("scoreGuest")
let countsGuest=0
function change(){
    counts+=1
    count.textContent=counts
}
function change2(){
    counts+=2
    count.textContent=counts
}
function change3(){
    counts+=3
    count.textContent=counts
}
function changeGuest1(){
    countsGuest+=1
    countGuest.textContent=countsGuest

}
function changeGuest2(){
    countsGuest+=2
    countGuest.textContent=countsGuest

}
function changeGuest3(){
    countsGuest+=3
    countGuest.textContent=countsGuest

}
function NewGAme(){
    counts=0
    countsGuest=0
    count.textContent=counts
    countGuest.textContent=countsGuest


}