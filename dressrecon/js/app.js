
$(document).ready(function() {
    const results_sequences = [
        "shape", "tracks", "gaussians", "rgb", "ref_rgb",
    ];
    const baseline_comparison_sequences = [
        "0008_01", "0102_02", "0113_06", "0121_02", "0123_02",
        "0128_04", "0152_01", "0166_04", "0188_02", "0239_01",
    ];
    const motion_decomposition_sequences = [
        "0008_01", "0102_02", "0113_06", "0121_02", "0123_02",
        "0128_04", "0152_01", "0166_04", "0188_02", "0239_01",
    ];
    const extreme_view_synthesis_sequences = [
        "0102_02", "0121_02", "0128_04", "0188_02",
    ];
    window.results_seq = "gaussians";
    window.baseline_comparison_seq = "0123_02";
    window.motion_decomposition_seq = "0008_01";
    window.extreme_view_synthesis_seq = "0121_02";

    // ===== Results: Sequence Selector
    function get_onclick_results(seq) {
        return function(e) {
            window.results_seq = seq;
            document.getElementById("results").src = "./img/results/" + seq + ".mp4";
            for (var i = 0; i < results_sequences.length; i++) {
                var other_seq = results_sequences[i];
                document.getElementById("results_" + other_seq).className = "";
            }
            document.getElementById("results_" + seq).className = "selected-scene";
        };
    }

    for (var i = 0; i < results_sequences.length; i++) {
        var seq = results_sequences[i];
        document.getElementById("results_" + seq).addEventListener("click", get_onclick_results(seq));
    }
    get_onclick_results(window.results_seq)("");

    // ===== Baseline Comparison: Sequence Selector
    function get_onclick_baseline_comparison(seq) {
        return function(e) {
            window.baseline_comparison_seq = seq;
            document.getElementById("baseline_comparison").src = "./img/baseline_comparison/" + seq + ".mp4";
            for (var i = 0; i < baseline_comparison_sequences.length; i++) {
                var other_seq = baseline_comparison_sequences[i];
                document.getElementById("baseline_comparison_" + other_seq).className = "";
            }
            document.getElementById("baseline_comparison_" + seq).className = "selected-scene";
        };
    }

    for (var i = 0; i < baseline_comparison_sequences.length; i++) {
        var seq = baseline_comparison_sequences[i];
        document.getElementById("baseline_comparison_" + seq).addEventListener("click", get_onclick_baseline_comparison(seq));
    }
    get_onclick_baseline_comparison(window.baseline_comparison_seq)("");

    // ===== Motion Decomposition: Sequence Selector
    function get_onclick_motion_decomposition(seq) {
        return function(e) {
            window.motion_decomposition_seq = seq;
            document.getElementById("motion_decomposition").src = "./img/motion_decomposition/" + seq + ".mp4";
            for (var i = 0; i < motion_decomposition_sequences.length; i++) {
                var other_seq = motion_decomposition_sequences[i];
                document.getElementById("motion_decomposition_" + other_seq).className = "";
            }
            document.getElementById("motion_decomposition_" + seq).className = "selected-scene";
        };
    }

    for (var i = 0; i < motion_decomposition_sequences.length; i++) {
        var seq = motion_decomposition_sequences[i];
        document.getElementById("motion_decomposition_" + seq).addEventListener("click", get_onclick_motion_decomposition(seq));
    }
    get_onclick_motion_decomposition(window.motion_decomposition_seq)("");

    // ===== Extreme View Synthesis: Sequence Selector
    function get_onclick_extreme_view_synthesis(seq) {
        return function(e) {
            window.extreme_view_synthesis_seq = seq;
            document.getElementById("extreme_view_synthesis").src = "./img/extreme_view_synthesis/" + seq + ".mp4";
            for (var i = 0; i < extreme_view_synthesis_sequences.length; i++) {
                var other_seq = extreme_view_synthesis_sequences[i];
                document.getElementById("extreme_view_synthesis_" + other_seq).className = "";
            }
            document.getElementById("extreme_view_synthesis_" + seq).className = "selected-scene";
        };
    }

    for (var i = 0; i < extreme_view_synthesis_sequences.length; i++) {
        var seq = extreme_view_synthesis_sequences[i];
        document.getElementById("extreme_view_synthesis_" + seq).addEventListener("click", get_onclick_extreme_view_synthesis(seq));
    }
    get_onclick_extreme_view_synthesis(window.extreme_view_synthesis_seq)("");

});
