export async function sendMonthlyReview(data: any): Promise<boolean> {
  try {
    const formData = new FormData();

    // Replace with your Web3Forms Access Key
    formData.append(
      "access_key",
      "5f818451-df1b-43db-8385-4f10aa4f9266"
    );

    formData.append(
      "subject",
      "📋 DUOFIT Monthly Progress Review"
    );

    formData.append(
      "from_name",
      "DUOFIT Website"
    );

    formData.append(
      "message",
`
==============================
DUOFIT MONTHLY PROGRESS REVIEW
==============================

1. Visible Changes

${data.visibleChanges}


--------------------------------------------

2. Most Valuable Part

${data.valuablePart.join(", ")}

${data.valuablePartOther}


--------------------------------------------

3. Doing Differently

${data.doingDifferently}


--------------------------------------------

4. Area to Improve

${
data.improveArea === "Other"
? data.improveAreaOther
: data.improveArea
}


--------------------------------------------

5. Journey Message

${data.journeyMessage}

--------------------------------------------

Generated from DUOFIT Website
`
    );

    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: formData,
      }
    );

    const result = await response.json();

    return result.success;
  } catch (error) {
    console.error(error);
    return false;
  }
}