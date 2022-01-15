export const countDown = (callThis) => {
    const counter = setInterval(() => {
        callThis.setState({ timeCountDown: callThis.state.timeCountDown - 1 });
        if(callThis.state.timeCountDown === 0) {
            clearInterval(counter);
          
            window.location.reload(); return;
        }
    }, 1000);
}