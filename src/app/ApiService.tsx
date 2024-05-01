export type AssessmentResult = {
  score: number;
  text1: string;
  text2: string;
  text3: string;
};

const postFormData = async (
  path: string,
  formData: FormData
): Promise<AssessmentResult> => {
  const response = await fetch(path, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export default {
  postFormData,
};
