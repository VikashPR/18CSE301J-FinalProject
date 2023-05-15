from nltk.probability import FreqDist
from nltk.tokenize import sent_tokenize, word_tokenize
from nltk.corpus import stopwords
import nltk
nltk.download('punkt')
nltk.download('stopwords')


def summarize_feedback(file_path, num_sentences):
    # Read the text file
    with open(file_path, 'r') as file:
        feedback_text = file.read()

    # Tokenize the text into sentences
    sentences = sent_tokenize(feedback_text)

    # Tokenize the text into words
    words = word_tokenize(feedback_text)

    # Filter out stop words
    stop_words = set(stopwords.words('english'))
    words = [word.lower() for word in words if word.lower() not in stop_words]

    # Calculate word frequency
    freq_dist = FreqDist(words)

    # Sort the sentences based on the sum of word frequencies
    ranked_sentences = sorted(sentences, key=lambda sentence: sum(
        freq_dist[word.lower()] for word in word_tokenize(sentence)), reverse=True)

    # Select the top 'num_sentences' sentences as the summary
    summary = ' '.join(ranked_sentences[:num_sentences])

    return summary


# Example usage
file_path = './assets/files/suggestions.txt'  # Replace with the path to your feedback file
num_sentences = 5  # Number of sentences in the summary

summary = summarize_feedback(file_path, num_sentences)
print(summary)
