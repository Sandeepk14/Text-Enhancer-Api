const { getEnhancedText } = require("../services/geminiService");

exports.enhanceText = async (req, res) => {
  try {
    console.log("📩 [Enhance] Request received:", req.body);

    const { text, modelType } = req.body;
    if (!text) {
      return res.status(400).json({ error: "Text is required." });
    }

    const enhancedText = await getEnhancedText(
      text,
      "enhance",
      modelType || "flash"
    );

    res.status(200).json({
      success: true,
      message: "Text enhancement successful",
      enhancedText,
    });
  } catch (error) {
    console.error("❌ [Enhance] Error:", error.message || error);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
      details: error.message,
    });
  }
};

exports.modifyText = async (req, res) => {
  try {
    console.log("📩 [Modify] Request received:", req.body);

    const { text, modification, modelType } = req.body;
    if (!text || !modification) {
      return res
        .status(400)
        .json({ error: "Text and modification type are required." });
    }

    const validModifications = ["shorten", "lengthen", "formal", "casual"];
    if (!validModifications.includes(modification.toLowerCase())) {
      return res.status(400).json({
        error: `Invalid modification type. Allowed values: ${validModifications.join(
          ", "
        )}`,
      });
    }

    const modifiedText = await getEnhancedText(
      text,
      modification,
      modelType || "flash"
    );

    res.status(200).json({
      success: true,
      message: `Text modified successfully - ${modification}`,
      modifiedText,
    });
  } catch (error) {
    console.error("❌ [Modify] Error:", error.message || error);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
      details: error.message,
    });
  }
};
