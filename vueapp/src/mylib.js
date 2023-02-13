
var test = {
    foo () { console.log('foo') },
    bar () { console.log('bar') },
    baz () { console.log('baz') },

    myFunction() {document.getElementById("demo").innerHTML = "I have changed!"; },


    // updateProbabilityTree(){



    //     if ((prob1_re.value >= 0) && (prob1_re.value <= 1)) {
    //       prob2_ne.innerText = round(1 - prob1_re.value);
    //       prob3_tp.innerText = round(1 - beta);
    //       prob4_fn.innerText = round(beta);
    //       prob5_tn.innerText = round(1 - alpha);
    //       prob6_fp.innerText = round(alpha);
    //       prob7_retp.innerText = round(prob1_re.value * prob3_tp.innerText);
    //       prob8_refn.innerText = round(prob1_re.value * prob4_fn.innerText);
    //       prob9_netn.innerText = round(prob2_ne.innerText * prob5_tn.innerText);
    //       prob10_nefp.innerText = round(prob2_ne.innerText * prob6_fp.innerText);

    //     // Calculate the False Discovery Rate (FDR)
    //     let fdr = getFalseDiscoveryRate(parseFloat(prob10_nefp.innerText), parseFloat(prob7_retp.innerText));
    //     // Calculate the Positive Predictive Value (PPV)
    //     let ppv = math.round(100 - fdr,2);
    
    //     if (Number.isNaN(fdr)){
    //       fdr = " - ";
    //     }
    //     if (Number.isNaN(ppv)){
    //       ppv = " - ";
    //     }
    
    //     elem("false_rate").innerText = fdr + "%";
    //     elem("ppv").innerText = ppv + "%";
    //     elem("sensitivity").innerText = prob3_tp.innerText;
    //     elem("specificity").innerText = prob5_tn.innerText;
    //   }
    // }


  }


export default test

